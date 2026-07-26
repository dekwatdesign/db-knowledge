# `hsk_psy_opitemrece`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| vn | varchar(20) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| code_id | varchar(10) | YES | MUL | NULL |  |  |
| code_id_sub | varchar(10) | YES | MUL | NULL |  |  |
| note | varchar(200) | YES |  | NULL |  |  |
| staff | varchar(20) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| code_id | code_id | no | 1 |
| code_id_sub | code_id_sub | no | 1 |
| hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | id | yes | 1 |
| staff | staff | no | 1 |
| UK | vn | yes | 1 |
| UK | hn | yes | 2 |
| UK | vstdate | yes | 3 |
| UK | code_id | yes | 4 |
| UK | code_id_sub | yes | 5 |
| vstdate | vstdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "vn": "641207082620",
    "hn": "640004197",
    "an": "",
    "vstdate": "2021-12-22",
    "vsttime": "14:33:10",
    "code_id": "A007",
    "code_id_sub": "G049",
    "note": "ทดสอบโปรแกรม",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 2,
    "vn": "641222080436",
    "hn": "640004153",
    "an": "",
    "vstdate": "2021-12-24",
    "vsttime": "11:48:34",
    "code_id": "A009",
    "code_id_sub": "G065",
    "note": "",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 8,
    "vn": "641223084429",
    "hn": "640004484",
    "an": "",
    "vstdate": "2021-12-24",
    "vsttime": "11:56:54",
    "code_id": "A003",
    "code_id_sub": "G040",
    "note": "",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 4,
    "vn": "641223084429",
    "hn": "640004484",
    "an": "",
    "vstdate": "2021-12-24",
    "vsttime": "11:55:12",
    "code_id": "A003",
    "code_id_sub": "G036",
    "note": "",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 6,
    "vn": "641223084654",
    "hn": "640004485",
    "an": "",
    "vstdate": "2021-12-24",
    "vsttime": "11:56:15",
    "code_id": "A003",
    "code_id_sub": "G040",
    "note": "",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 7,
    "vn": "641223084654",
    "hn": "640004485",
    "an": "",
    "vstdate": "2021-12-24",
    "vsttime": "11:56:22",
    "code_id": "A003",
    "code_id_sub": "G036",
    "note": "",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 9,
    "vn": "641220083106",
    "hn": "640002777",
    "an": "",
    "vstdate": "2021-12-24",
    "vsttime": "11:59:59",
    "code_id": "A009",
    "code_id_sub": "G065",
    "note": "",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 10,
    "vn": "641228083823",
    "hn": "630002307",
    "an": "",
    "vstdate": "2021-12-28",
    "vsttime": "10:06:19",
    "code_id": "A009",
    "code_id_sub": "G065",
    "note": "",
    "staff": "[MASKED_FULLNAME]"
  }
]
```
