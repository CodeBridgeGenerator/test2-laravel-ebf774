<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Relation;
use App\Interfaces\RelationRepositoryInterface;
use App\Http\Requests\CreateRelationRequest;

class RelationController extends Controller
{
    private RelationRepositoryInterface $userRepository;

    public function __construct(RelationRepositoryInterface $userRepository) 
    {
        $this->RelationRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->RelationRepository->getAllRelations()
        ]);
    }

    public function store(CreateRelationRequest $request): JsonResponse 
    {
        $user = Relation::create($request->validated());
        return response()->json(['message' => 'Relation created successfully']);
    }

}
