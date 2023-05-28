<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use JWTAuth;
use PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException;

class JWTMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        try {
            if ($request->decodedPath() === 'api/login') {
                return $next($request);
            }
            if ($request->decodedPath() === 'api/register') {
                return $next($request);
            }

            if (!$request->bearerToken()) {
                return response()->json(['message' => 'token not provider.'], 401);
            }

            $user = JWTAuth::parseToken()->authenticate();

            if (!$user) {
                return response()->json(['message' => 'user not found'], 500);
            }

        } catch (JWTException $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
        return $next($request);
    }
}
