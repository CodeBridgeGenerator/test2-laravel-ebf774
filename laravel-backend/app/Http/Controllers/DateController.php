<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Date;
use App\Interfaces\DateRepositoryInterface;
use App\Http\Requests\CreateDateRequest;

class DateController extends Controller
{
    private DateRepositoryInterface $userRepository;

    public function __construct(DateRepositoryInterface $userRepository) 
    {
        $this->DateRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->DateRepository->getAllDates()
        ]);
    }

    public function store(CreateDateRequest $request): JsonResponse 
    {
        $user = Date::create($request->validated());
        return response()->json(['message' => 'Date created successfully']);
    }

}
