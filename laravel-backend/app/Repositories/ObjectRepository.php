<?php

namespace App\Repositories;

use App\Interfaces\ObjectRepositoryInterface;
use App\Models\Object;
use App\Http\Resources\ObjectResource;

class ObjectRepository implements ObjectRepositoryInterface 
{
    public function getAllObjects() 
    {
        $object = Object::all();
        return ObjectResource::collection($object);
    }

    public function getObjectById($ObjectId) 
    {
        $object = Object::findOrFail($ObjectId);
        return ObjectResource::collection($object);
    }

    public function deleteObject($ObjectId) 
    {
        Object::destroy($ObjectId);
    }

    public function createObject(array $ObjectDetails) 
    {
        return Object::create($ObjectDetails);
    }

    public function updateObject($ObjectId, array $newDetails) 
    {
        $users = Object::whereId($ObjectId)->update($newDetails);
        return ObjectResource::collection($object);
    }

}