<?php

namespace App\Interfaces;

interface ArrayRepositoryInterface 
{
    public function getAllArrays();
    public function getArrayById($arrayId);
    public function deleteArray($arrayId);
    public function createArray(array $arrayDetails);
    public function updateArray($arrayId, array $newDetails);
}