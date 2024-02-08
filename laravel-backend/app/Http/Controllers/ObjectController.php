<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Object;
use App\Interfaces\ObjectRepositoryInterface;
use App\Http\Requests\CreateObjectRequest;

class ObjectController extends Controller
{
    private ObjectRepositoryInterface $userRepository;

    public function __construct(ObjectRepositoryInterface $userRepository) 
    {
        $this->ObjectRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->ObjectRepository->getAllObjects()
        ]);
    }

    public function store(CreateObjectRequest $request): JsonResponse 
    {
        $user = Object::create($request->validated());
        return response()->json(['message' => 'Object created successfully']);
    }

}
