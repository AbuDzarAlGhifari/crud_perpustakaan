<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class AnggotaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $perpusId = $this->route('id');

        return [
            'nama' => ['required', 'string', 'max:50'],
            'email' => [
                'required',
                'string',
                'email',
                'max:50',
                Rule::unique('anggotas')->ignore($perpusId),
            ],
            'no_hp' => ['required', 'string', 'max:50'],
            'alamat' => ['required', 'string', 'max:50'],
        ];
    }
    
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response([
            "code" => 400,
            "status" => "Bad Request",
            "errors" => $validator->getMessageBag()
        ], 400));
    }
}
