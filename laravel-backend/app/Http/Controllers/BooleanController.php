<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Boolean;
use App\Interfaces\BooleanRepositoryInterface;
use App\Http\Requests\CreateBooleanRequest;

class BooleanController extends Controller
{
    private BooleanRepositoryInterface $userRepository;

    public function __construct(BooleanRepositoryInterface $userRepository) 
    {
        $this->BooleanRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->BooleanRepository->getAllBooleans()
        ]);
    }

    public function store(CreateBooleanRequest $request): JsonResponse 
    {
        $user = Boolean::create($request->validated());
        return response()->json(['message' => 'Boolean created successfully']);
    }

}
