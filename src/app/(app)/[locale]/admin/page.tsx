'use client'
import * as React from 'react'
// Додаємо потрібні імпорти з @tanstack/react-table для сортування, фільтрації, пагінації, тощо
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel, // Додано для фільтрації
  getPaginationRowModel, // Додано для пагінації
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Package, Truck, CheckCircle, XCircle, RefreshCw } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from '@/components/admin/ui/dropdown-menu'
import { Button } from '@/components/admin/ui/button'
import { Checkbox } from '@/components/admin/ui/checkbox'
import { Input } from '@/components/admin/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/admin/ui/table'

// Опис типу даних
interface IOrder {
  id: string
  status:
    | 'new'
    | 'awaitingPayment'
    | 'awaitingShipment'
    | 'shipped'
    | 'delivered'
    | 'completed'
    | 'awaitingReturn'
    | 'cancelled'
    | 'failedDelivery'
  products: {
    id: string
    name: string
    count: number
    price: number
  }[]
  total: number
  user: {
    id: string
    name: string
    surname: string
    phone: string
    email: string
  }
  delivery: {
    city: string
    department: string
    phone: string
  }
  payment: {
    method: 'cash' | 'card'
  }
  comment: string
}

// Дані табів
const tabsData = [
  {
    value: 'new',
    icon: <Package className="text-blue-500 h-5 w-5" />,
    label: 'Нові',
  },
  {
    value: 'awaitingPayment',
    icon: <XCircle className="text-yellow-500 h-5 w-5" />,
    label: 'Очікує оплати',
  },
  {
    value: 'awaitingShipment',
    icon: <Truck className="text-purple-500 h-5 w-5" />,
    label: 'Очікує відправки',
  },
  {
    value: 'shipped',
    icon: <CheckCircle className="text-green-500 h-5 w-5" />,
    label: 'Відправлено',
  },
  {
    value: 'completed',
    icon: <CheckCircle className="text-gray-700 h-5 w-5" />,
    label: 'Виконано',
  },
  {
    value: 'awaitingReturn',
    icon: <RefreshCw className="text-orange-500 h-5 w-5" />,
    label: 'Очікує повернення',
  },
  {
    value: 'cancelled',
    icon: <XCircle className="text-red-500 h-5 w-5" />,
    label: 'Скасовано',
  },
  {
    value: 'failedDelivery',
    icon: <XCircle className="text-red-700 h-5 w-5" />,
    label: 'Не доставлено',
  },
]

const columns: ColumnDef<IOrder>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status') as string}</div>
    ),
  },
  {
    id: 'email',
    header: ({ column }) => <div>Email</div>,
    accessorFn: (row) => row.user.email,
    cell: ({ row }) => (
      <div className="lowercase">{row.original.user.email}</div>
    ),
  },
  {
    id: 'total',
    header: 'total',
    accessorKey: 'total',
    accessorFn: (row) => row.user.email,
  },
  {
    id: 'actions',
    header: 'actions',
    accessorKey: 'actions',
    cell: ({ row }) => {
      const order = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">action</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.id)}
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const data: IOrder[] = [
  {
    id: '1',
    status: 'new',
    products: [
      { id: '1', name: 'Product 1', count: 1, price: 100 },
      { id: '2', name: 'Product 2', count: 2, price: 200 },
    ],
    total: 300,
    user: {
      id: '1',
      name: 'Name',
      surname: 'Surname',
      phone: '380123456789',
      email: 'example@example.com',
    },
    delivery: {
      city: 'Kyiv',
      department: 'Department 1',
      phone: '380123456789',
    },
    payment: { method: 'cash' },
    comment: 'Some comment',
  },
  {
    id: '2',
    status: 'awaitingPayment',
    products: [{ id: '3', name: 'Product 3', count: 1, price: 150 }],
    total: 150,
    user: {
      id: '2',
      name: 'John',
      surname: 'Doe',
      phone: '380987654321',
      email: 'john.doe@example.com',
    },
    delivery: {
      city: 'Lviv',
      department: 'Department 5',
      phone: '380987654321',
    },
    payment: { method: 'card' },
    comment: 'Urgent delivery',
  },
]

function DataTable<TData>({
  columns,
  data,
}: {
  columns: ColumnDef<TData>[]
  data: TData[]
}) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    // підключаємо стани
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    // додаємо необхідні моделі
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), // Для сортування
    getFilteredRowModel: getFilteredRowModel(), // Для фільтрації
    getPaginationRowModel: getPaginationRowModel(), // Для пагінації
  })

  return (
    <div className="mt-6 w-full">
      <div className="flex items-center gap-2 py-4">
        <Input
          placeholder="Фільтр по email..."
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('email')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* Коментар: Додано меню для приховування/показу колонок */}
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide()) // getCanHide = true за замовчуванням для accessorKey
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-gray-200 overflow-x-auto rounded-md border">
        <Table className="w-full border-collapse">
          <TableHeader className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-b">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-gray-700 px-4 py-2 text-left text-sm font-medium"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="divide-gray-100 divide-y">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-gray-50"
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="text-gray-900 px-4 py-2 text-sm"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Кнопки пагінації */}
      {/* Коментар: Додано пагінацію з другого прикладу */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="p-4">
      <Tabs defaultValue="new">
        <TabsList className="border-gray-300 flex flex-wrap justify-between gap-1 bg-transparent">
          {tabsData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex flex-col items-center gap-2 border-[1px] border-black/30"
            >
              <div className="flex h-full w-full items-center justify-center">
                {tab.icon}
              </div>
              <div>{tab.label}</div>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="mt-12">
          <TabsContent value="new">
            <DataTable columns={columns} data={data} />
          </TabsContent>

          <TabsContent value="awaitingPayment" className="mt-6">
            <div>Контент для замовлень, що очікують оплати</div>
          </TabsContent>

          <TabsContent value="awaitingShipment" className="mt-6">
            <div>Контент для замовлень, що очікують відправки</div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
