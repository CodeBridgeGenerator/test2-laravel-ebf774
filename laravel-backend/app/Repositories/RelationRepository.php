<?php

namespace App\Repositories;

use App\Interfaces\RelationRepositoryInterface;
use App\Models\Relation;
use App\Http\Resources\RelationResource;

class RelationRepository implements RelationRepositoryInterface 
{
    public function getAllRelations() 
    {
        $relation = Relation::all();
        return RelationResource::collection($relation);
    }

    public function getRelationById($RelationId) 
    {
        $relation = Relation::findOrFail($RelationId);
        return RelationResource::collection($relation);
    }

    public function deleteRelation($RelationId) 
    {
        Relation::destroy($RelationId);
    }

    public function createRelation(array $RelationDetails) 
    {
        return Relation::create($RelationDetails);
    }

    public function updateRelation($RelationId, array $newDetails) 
    {
        $users = Relation::whereId($RelationId)->update($newDetails);
        return RelationResource::collection($relation);
    }

}