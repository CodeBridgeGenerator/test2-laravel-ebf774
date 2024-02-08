<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateStringRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'text' => 'string|max:250',
'input' => 'string|max:250',
'icon' => 'string|max:250',
'image' => 'string|max:250',
'avatar' => 'string|max:250',
'chip' => 'string|max:250',
'tag' => 'string|max:250'
            // 'name' => 'required|string|max:250',
            // 'email' => 'required|email|max:250|unique:users',
            // 'password' => 'required|min:3|confirmed'
        ];
    }
}
