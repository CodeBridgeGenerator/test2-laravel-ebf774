<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Number;
use App\Interfaces\NumberRepositoryInterface;
use App\Http\Requests\CreateNumberRequest;

class NumberController extends Controller
{
    private NumberRepositoryInterface $userRepository;

    public function __construct(NumberRepositoryInterface $userRepository) 
    {
        $this->NumberRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->NumberRepository->getAllNumbers()
        ]);
    }

    public function store(CreateNumberRequest $request): JsonResponse 
    {
        $user = Number::create($request->validated());
        return response()->json(['message' => 'Number created successfully']);
    }

}
