# `gsy_permis_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(4) | YES |  |  |  |  |
| PERMIS_ID | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 368,
    "PERSON_ID": "131",
    "PERMIS_ID": "GLE005",
    "updated_at": "2022-02-03 15:46:13",
    "created_at": "2022-02-03 15:46:13"
  },
  {
    "ID": 593,
    "PERSON_ID": "159",
    "PERMIS_ID": "GAS001",
    "updated_at": "2023-11-08 06:54:41",
    "created_at": "2023-11-08 06:54:41"
  },
  {
    "ID": 461,
    "PERSON_ID": "22",
    "PERMIS_ID": "GTS001",
    "updated_at": "2022-05-25 04:33:47",
    "created_at": "2022-05-25 04:33:47"
  },
  {
    "ID": 634,
    "PERSON_ID": "147",
    "PERMIS_ID": "GAS001",
    "updated_at": "2024-11-29 02:33:19",
    "created_at": "2024-11-29 02:33:19"
  },
  {
    "ID": 635,
    "PERSON_ID": "147",
    "PERMIS_ID": "GRM001",
    "updated_at": "2024-11-29 02:33:19",
    "created_at": "2024-11-29 02:33:19"
  },
  {
    "ID": 682,
    "PERSON_ID": "203",
    "PERMIS_ID": "HORG",
    "updated_at": "2024-12-25 06:36:02",
    "created_at": "2024-12-25 06:36:02"
  },
  {
    "ID": 681,
    "PERSON_ID": "203",
    "PERMIS_ID": "GMB004",
    "updated_at": "2024-12-25 06:36:02",
    "created_at": "2024-12-25 06:36:02"
  },
  {
    "ID": 460,
    "PERSON_ID": "22",
    "PERMIS_ID": "GRE001",
    "updated_at": "2022-05-25 04:33:47",
    "created_at": "2022-05-25 04:33:47"
  }
]
```
