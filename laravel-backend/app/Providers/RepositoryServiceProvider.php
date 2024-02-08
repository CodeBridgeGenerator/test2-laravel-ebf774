<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\UserRepositoryInterface;
use App\Repositories\UserRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
$this->app->bind(StringRepositoryInterface::class, StringRepository::class);
$this->app->bind(BooleanRepositoryInterface::class, BooleanRepository::class);
$this->app->bind(NumberRepositoryInterface::class, NumberRepository::class);
$this->app->bind(DateRepositoryInterface::class, DateRepository::class);
$this->app->bind(ArrayRepositoryInterface::class, ArrayRepository::class);
$this->app->bind(ObjectRepositoryInterface::class, ObjectRepository::class);
$this->app->bind(RelationRepositoryInterface::class, RelationRepository::class);
        // ~cb-service-provider~
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
