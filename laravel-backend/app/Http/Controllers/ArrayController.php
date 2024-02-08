<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Array;
use App\Interfaces\ArrayRepositoryInterface;
use App\Http\Requests\CreateArrayRequest;

class ArrayController extends Controller
{
    private ArrayRepositoryInterface $userRepository;

    public function __construct(ArrayRepositoryInterface $userRepository) 
    {
        $this->ArrayRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->ArrayRepository->getAllArrays()
        ]);
    }

    public function store(CreateArrayRequest $request): JsonResponse 
    {
        $user = Array::create($request->validated());
        return response()->json(['message' => 'Array created successfully']);
    }

}
