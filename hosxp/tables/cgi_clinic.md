# `cgi_clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) unsigned | NO | PRI | 0 |  |  |
| clinic_code | char(1) | YES | MUL | NULL |  |  |
| clinic_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| cc | clinic_code | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "id": 1,
    "clinic_code": "1",
    "clinic_name": "นิติจิตเวช"
  },
  {
    "id": 2,
    "clinic_code": "2",
    "clinic_name": "จิตเวชยา/สารเสพติด"
  },
  {
    "id": 3,
    "clinic_code": "3",
    "clinic_name": "จิตเวชเด็กและวัยรุ่น"
  },
  {
    "id": 4,
    "clinic_code": "4",
    "clinic_name": "จิตเวชสูงอายุ"
  }
]
```
