<?php

namespace App\Interfaces;

interface StringRepositoryInterface 
{
    public function getAllStrings();
    public function getStringById($stringId);
    public function deleteString($stringId);
    public function createString(array $stringDetails);
    public function updateString($stringId, array $newDetails);
}