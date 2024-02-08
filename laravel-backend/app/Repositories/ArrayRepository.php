<?php

namespace App\Repositories;

use App\Interfaces\ArrayRepositoryInterface;
use App\Models\Array;
use App\Http\Resources\ArrayResource;

class ArrayRepository implements ArrayRepositoryInterface 
{
    public function getAllArrays() 
    {
        $array = Array::all();
        return ArrayResource::collection($array);
    }

    public function getArrayById($ArrayId) 
    {
        $array = Array::findOrFail($ArrayId);
        return ArrayResource::collection($array);
    }

    public function deleteArray($ArrayId) 
    {
        Array::destroy($ArrayId);
    }

    public function createArray(array $ArrayDetails) 
    {
        return Array::create($ArrayDetails);
    }

    public function updateArray($ArrayId, array $newDetails) 
    {
        $users = Array::whereId($ArrayId)->update($newDetails);
        return ArrayResource::collection($array);
    }

}