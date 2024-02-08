<?php

namespace App\Repositories;

use App\Interfaces\StringRepositoryInterface;
use App\Models\String;
use App\Http\Resources\StringResource;

class StringRepository implements StringRepositoryInterface 
{
    public function getAllStrings() 
    {
        $string = String::all();
        return StringResource::collection($string);
    }

    public function getStringById($StringId) 
    {
        $string = String::findOrFail($StringId);
        return StringResource::collection($string);
    }

    public function deleteString($StringId) 
    {
        String::destroy($StringId);
    }

    public function createString(array $StringDetails) 
    {
        return String::create($StringDetails);
    }

    public function updateString($StringId, array $newDetails) 
    {
        $users = String::whereId($StringId)->update($newDetails);
        return StringResource::collection($string);
    }

}