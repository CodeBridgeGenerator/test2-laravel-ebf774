<?php

namespace App\Interfaces;

interface ObjectRepositoryInterface 
{
    public function getAllObjects();
    public function getObjectById($objectId);
    public function deleteObject($objectId);
    public function createObject(array $objectDetails);
    public function updateObject($objectId, array $newDetails);
}