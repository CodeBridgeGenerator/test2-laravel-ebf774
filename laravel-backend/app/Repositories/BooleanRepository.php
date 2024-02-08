<?php

namespace App\Repositories;

use App\Interfaces\BooleanRepositoryInterface;
use App\Models\Boolean;
use App\Http\Resources\BooleanResource;

class BooleanRepository implements BooleanRepositoryInterface 
{
    public function getAllBooleans() 
    {
        $boolean = Boolean::all();
        return BooleanResource::collection($boolean);
    }

    public function getBooleanById($BooleanId) 
    {
        $boolean = Boolean::findOrFail($BooleanId);
        return BooleanResource::collection($boolean);
    }

    public function deleteBoolean($BooleanId) 
    {
        Boolean::destroy($BooleanId);
    }

    public function createBoolean(array $BooleanDetails) 
    {
        return Boolean::create($BooleanDetails);
    }

    public function updateBoolean($BooleanId, array $newDetails) 
    {
        $users = Boolean::whereId($BooleanId)->update($newDetails);
        return BooleanResource::collection($boolean);
    }

}