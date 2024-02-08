<?php

namespace App\Interfaces;

interface RelationRepositoryInterface 
{
    public function getAllRelations();
    public function getRelationById($relationId);
    public function deleteRelation($relationId);
    public function createRelation(array $relationDetails);
    public function updateRelation($relationId, array $newDetails);
}