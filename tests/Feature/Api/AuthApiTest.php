<?php

namespace Tests\Feature\Api;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use JWTAuth;
use Tests\TestCase;

class AuthApiTest extends TestCase
{

    use RefreshDatabase;

    public function test_users_can_authenticate_using_api(): void
    {
        $user = User::factory()->create();

        $response = $this->post('api/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $response->assertOk()
            ->assertJsonPath('data.user.email', $user['email']);
    }

    public function test_if_users_can_register_using_api(): void
    {
        $response = $this->post('api/register', [
            'name' => 'Joao',
            'email' => 'joao@gmail.com',
            'password' => 'senha123',
        ]);

        $response->assertCreated();
    }

    public function test_if_api_response_400_with_wrong_email_addres(): void
    {
        $response = $this->post('api/register', [
            'name' => 'Joao',
            'email' => 'joaogmail.com', // Wrong Email;
            'password' => 'senha123',
        ]);

        $response->assertBadRequest();
    }

    public function test_if_users_without_token_can_not_call_protected_route(): void
    {
        $response = $this->get('api/user');

        $response->assertUnauthorized();
    }

    public function test_if_users_with_token_can_call_protected_route(): void
    {
        $user = User::factory()->create();

        $token = JWTAuth::fromUser($user);

        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->get('api/user');
        $response->assertOk()->assertJsonPath('email', $user['email']);
    }

}
