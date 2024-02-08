<?php

namespace App\Interfaces;

interface DateRepositoryInterface 
{
    public function getAllDates();
    public function getDateById($dateId);
    public function deleteDate($dateId);
    public function createDate(array $dateDetails);
    public function updateDate($dateId, array $newDetails);
}