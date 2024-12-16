import {
  CheckCircle,
  Clock,
  RefreshCw,
  Truck,
  XCircle,
  AlertCircle,
  Package,
} from 'lucide-react'

export const tabsOrder = [
  {
    value: 'new',
    icon: <Clock className="text-blue-500 h-5 w-5" />,
    label: 'Нові',
  },
  {
    value: 'awaiting-payment',
    icon: <AlertCircle className="text-yellow-500 h-5 w-5" />,
    label: 'Очікує оплати',
  },
  {
    value: 'awaiting-shipment',
    icon: <Package className="text-purple-500 h-5 w-5" />,
    label: 'Очікує відправки',
  },
  {
    value: 'shipped',
    icon: <Truck className="text-green-500 h-5 w-5" />,
    label: 'Відправлено',
  },
  {
    value: 'completed',
    icon: <CheckCircle className="text-gray-700 h-5 w-5" />,
    label: 'Виконано',
  },
  {
    value: 'awaiting-return',
    icon: <RefreshCw className="text-orange-500 h-5 w-5" />,
    label: 'Очікує повернення',
  },
  {
    value: 'cancelled',
    icon: <XCircle className="text-red-500 h-5 w-5" />,
    label: 'Скасовано',
  },
  {
    value: 'failed-delivery',
    icon: <AlertCircle className="text-red-700 h-5 w-5" />,
    label: 'Не доставлено',
  },
]
