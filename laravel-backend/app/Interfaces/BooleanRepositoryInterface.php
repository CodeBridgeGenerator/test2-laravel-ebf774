<?php

namespace App\Interfaces;

interface BooleanRepositoryInterface 
{
    public function getAllBooleans();
    public function getBooleanById($booleanId);
    public function deleteBoolean($booleanId);
    public function createBoolean(array $booleanDetails);
    public function updateBoolean($booleanId, array $newDetails);
}