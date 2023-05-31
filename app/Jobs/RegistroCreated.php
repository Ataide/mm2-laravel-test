<?php

namespace App\Jobs;

use App\Models\RegistroPonto;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class RegistroCreated implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    private $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $registro = RegistroPonto::create(
            [
                'colaboradors_id' => $this->data['colaboradors_id'],
                "latitude" => $this->data['latitude'],
                "longitude" => $this->data['longitude'],
            ]
        );

        echo "Registrando... - " . $registro;
    }
}
