<?php

namespace App\Repositories;

use App\Interfaces\DateRepositoryInterface;
use App\Models\Date;
use App\Http\Resources\DateResource;

class DateRepository implements DateRepositoryInterface 
{
    public function getAllDates() 
    {
        $date = Date::all();
        return DateResource::collection($date);
    }

    public function getDateById($DateId) 
    {
        $date = Date::findOrFail($DateId);
        return DateResource::collection($date);
    }

    public function deleteDate($DateId) 
    {
        Date::destroy($DateId);
    }

    public function createDate(array $DateDetails) 
    {
        return Date::create($DateDetails);
    }

    public function updateDate($DateId, array $newDetails) 
    {
        $users = Date::whereId($DateId)->update($newDetails);
        return DateResource::collection($date);
    }

}