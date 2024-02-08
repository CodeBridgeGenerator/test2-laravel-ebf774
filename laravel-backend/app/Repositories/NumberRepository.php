<?php

namespace App\Repositories;

use App\Interfaces\NumberRepositoryInterface;
use App\Models\Number;
use App\Http\Resources\NumberResource;

class NumberRepository implements NumberRepositoryInterface 
{
    public function getAllNumbers() 
    {
        $number = Number::all();
        return NumberResource::collection($number);
    }

    public function getNumberById($NumberId) 
    {
        $number = Number::findOrFail($NumberId);
        return NumberResource::collection($number);
    }

    public function deleteNumber($NumberId) 
    {
        Number::destroy($NumberId);
    }

    public function createNumber(array $NumberDetails) 
    {
        return Number::create($NumberDetails);
    }

    public function updateNumber($NumberId, array $newDetails) 
    {
        $users = Number::whereId($NumberId)->update($newDetails);
        return NumberResource::collection($number);
    }

}