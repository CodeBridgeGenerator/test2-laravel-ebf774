<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\String;
use App\Interfaces\StringRepositoryInterface;
use App\Http\Requests\CreateStringRequest;

class StringController extends Controller
{
    private StringRepositoryInterface $userRepository;

    public function __construct(StringRepositoryInterface $userRepository) 
    {
        $this->StringRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->StringRepository->getAllStrings()
        ]);
    }

    public function store(CreateStringRequest $request): JsonResponse 
    {
        $user = String::create($request->validated());
        return response()->json(['message' => 'String created successfully']);
    }

}
