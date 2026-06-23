# DG3_Raiz_Belluccia
Página web de remodelación de muebles
.btn-primary {
  background: #F2C94C;
  padding: 12px 20px;
  border-radius: 999px;
  font-weight: 600;
  transition: transform .2s ease;
}

.btn-primary:hover {
  transform: scale(1.05);
}

.btn-secondary {
  border: 1px solid #111;
  padding: 12px 20px;
  border-radius: 999px;
  transition: all .2s ease;
}

.btn-secondary:hover {
  background: #111;
  color: white;
}

.card {
  position: relative;
  overflow: hidden;
}

.add-btn {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background: #F233B9;
  color: white;
  padding: 10px;
  border-radius: 12px;
  opacity: 0;
  transform: translateY(10px);
  transition: all .3s ease;
}

.card:hover .add-btn {
  opacity: 1;
  transform: translateY(0);
}