<?php

namespace App\Interfaces;

interface NumberRepositoryInterface 
{
    public function getAllNumbers();
    public function getNumberById($numberId);
    public function deleteNumber($numberId);
    public function createNumber(array $numberDetails);
    public function updateNumber($numberId, array $newDetails);
}