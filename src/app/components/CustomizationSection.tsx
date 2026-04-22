import { useState } from 'react';
import { Upload, Download, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function CustomizationSection() {
  const [customData, setCustomData] = useState({
    nombre: '',
    carrera: '',
    año: '',
    foto: null as string | null,
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomData({ ...customData, foto: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="personalizar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1b4332]/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#1b4332]" />
            <span className="text-sm font-semibold text-[#1b4332]">Editor en tiempo real</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Personaliza tu Diseño
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Agrega tu información y observa el resultado en tiempo real
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Información del diseño
            </h3>
            <div className="space-y-6">
              {/* Nombre */}
              <div>
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input
                  id="nombre"
                  placeholder="Ej: Juan Pérez García"
                  value={customData.nombre}
                  onChange={(e) =>
                    setCustomData({ ...customData, nombre: e.target.value })
                  }
                  className="mt-2"
                />
              </div>

              {/* Carrera */}
              <div>
                <Label htmlFor="carrera">Carrera</Label>
                <Input
                  id="carrera"
                  placeholder="Ej: Ingeniería de Sistemas"
                  value={customData.carrera}
                  onChange={(e) =>
                    setCustomData({ ...customData, carrera: e.target.value })
                  }
                  className="mt-2"
                />
              </div>

              {/* Año */}
              <div>
                <Label htmlFor="año">Año de graduación</Label>
                <Input
                  id="año"
                  placeholder="Ej: 2026"
                  value={customData.año}
                  onChange={(e) =>
                    setCustomData({ ...customData, año: e.target.value })
                  }
                  className="mt-2"
                />
              </div>

              {/* Foto Upload */}
              <div>
                <Label htmlFor="foto">Foto (opcional)</Label>
                <div className="mt-2">
                  <label
                    htmlFor="foto"
                    className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-lg appearance-none cursor-pointer hover:border-[#1b4332] focus:outline-none"
                  >
                    {customData.foto ? (
                      <img
                        src={customData.foto}
                        alt="Preview"
                        className="h-full object-contain"
                      />
                    ) : (
                      <div className="flex flex-col items-center space-y-2">
                        <Upload className="w-8 h-8 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          Haz clic para subir una imagen
                        </span>
                      </div>
                    )}
                    <input
                      id="foto"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 space-y-3">
                <Button className="w-full bg-[#1b4332] hover:bg-[#2d6a4f]">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar diseño
                </Button>
                <Button variant="outline" className="w-full">
                  Ordenar impresión
                </Button>
              </div>
            </div>
          </Card>

          {/* Preview Section */}
          <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Vista previa
            </h3>
            <div className="bg-white rounded-lg shadow-lg p-8 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, #1b4332 0, #1b4332 1px, transparent 0, transparent 50%)`,
                  backgroundSize: '10px 10px',
                }}></div>
              </div>

              {/* Content Preview */}
              <div className="relative z-10 text-center space-y-6 w-full">
                {/* Logo/Header */}
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">URP</span>
                  </div>
                  <div className="text-sm text-gray-500">Universidad Ricardo Palma</div>
                </div>

                {/* Photo */}
                {customData.foto && (
                  <div className="mb-6">
                    <img
                      src={customData.foto}
                      alt="User"
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-[#1b4332]"
                    />
                  </div>
                )}

                {/* Name */}
                <div>
                  <div className="text-3xl font-bold text-[#1b4332] mb-2">
                    {customData.nombre || 'Tu nombre aquí'}
                  </div>
                </div>

                {/* Career */}
                <div>
                  <div className="text-xl text-gray-700">
                    {customData.carrera || 'Tu carrera'}
                  </div>
                </div>

                {/* Year */}
                <div>
                  <div className="inline-block px-6 py-2 bg-[#1b4332] text-white rounded-full font-bold">
                    {customData.año || '20XX'}
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="pt-8 border-t border-gray-200 mt-8">
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Diseñado con URP PrintStudio
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              ✨ El diseño se actualiza automáticamente mientras escribes
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
