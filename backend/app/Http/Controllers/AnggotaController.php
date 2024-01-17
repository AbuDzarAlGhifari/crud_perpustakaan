<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AnggotaRequest;
use App\Models\Anggota;

class AnggotaController extends Controller
{
    public function index()
    {
        $anggotas = Anggota::all();

        return response()->json([
            'code' => 200,
            'status' => 'OK',
            'data' => $anggotas
        ], 200);
    }

    public function create(AnggotaRequest $request)
    {
        $data = $request->validated();
        $anggotas = new Anggota($data);
        $anggotas->save();

        return response()->json([
            'code' => 200,
            'status' => 'OK',
            'data' => $anggotas
        ], 200);
    }

    public function detail($id)
    {
        $anggotas = Anggota::find($id);
        if (!$anggotas) {
            return response()->json([
                'code' => 404,
                'status' => 'Not Found',
                'errors' => [
                    'message' => 'Anggota not found'
                ]
            ], 404);
        }
        
        return response()->json([
            'code' => 200,
            'status' => 'OK',
            'data' => $anggotas
        ], 200);
    }

    public function update(AnggotaRequest $request, $id)
    {
        $anggotas = Anggota::find($id);
        if (!$anggotas) {
            return response()->json([
                'code' => 404,
                'status' => 'Not Found',
                'errors' => [
                    'message' => 'Anggota not found'
                ]
            ], 404);
        }
        
        $data = $request->validated();
        $anggotas->update($data);

        return response()->json([
            'code' => 200,
            'status' => 'OK',
            'data' => $anggotas
        ], 200);
    }

    public function delete($id)
    {
        $anggotas = Anggota::find($id);
        if (!$anggotas) {
            return response()->json([
                'code' => 404,
                'status' => 'Not Found',
                'errors' => [
                    'message' => 'Anggota not found'
                ]
            ], 404);
        }

        $anggotas->delete();

        return response()->json([
            'code' => 200,
            'status' => 'OK',
            'message' => 'Anggota deleted successfully'
        ], 200);
    }
}