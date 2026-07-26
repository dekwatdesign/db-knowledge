# `opd_kios_computer_printer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_kios_computer_printer_id | int(11) | NO | PRI | 0 |  |  |
| computer_name | varchar(200) | YES | MUL | NULL |  |  |
| printer_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_computer_name | computer_name | no | 1 |
| PRIMARY | opd_kios_computer_printer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "opd_kios_computer_printer_id": 1,
    "computer_name": "COM-PC",
    "printer_name": "Zebra GC420t"
  },
  {
    "opd_kios_computer_printer_id": 2,
    "computer_name": "COM-PC",
    "printer_name": "Send To OneNote 2007"
  },
  {
    "opd_kios_computer_printer_id": 3,
    "computer_name": "COM-PC",
    "printer_name": "Microsoft XPS Document Writer"
  },
  {
    "opd_kios_computer_printer_id": 4,
    "computer_name": "COM-PC",
    "printer_name": "Gprinter GP-1224T"
  },
  {
    "opd_kios_computer_printer_id": 5,
    "computer_name": "COM-PC",
    "printer_name": "Fax"
  },
  {
    "opd_kios_computer_printer_id": 6,
    "computer_name": "COM-PC",
    "printer_name": "ApeosPort-II 4000 PCL 6"
  }
]
```
