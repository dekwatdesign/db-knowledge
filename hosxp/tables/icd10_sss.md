# `icd10_sss`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(9) | NO | PRI |  |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| ischronicdisease | int(11) | YES |  | NULL |  |  |
| chronicdiseasecode | varchar(5) | YES |  | NULL |  |  |
| islocked | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| is_valid | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code_valid | code | no | 1 |
| ix_code_valid | is_valid | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "A00",
    "name": "Cholera",
    "ischronicdisease": 0,
    "chronicdiseasecode": "",
    "islocked": 0,
    "hos_guid": "",
    "hos_guid_ext": "",
    "is_valid": null
  },
  {
    "code": "A000",
    "name": "Cholera due to Vibrio cholerae 01, biovar cholerae",
    "ischronicdisease": 0,
    "chronicdiseasecode": "",
    "islocked": 0,
    "hos_guid": "",
    "hos_guid_ext": "",
    "is_valid": "Y"
  },
  {
    "code": "A001",
    "name": "Cholera due to Vibrio cholerae 01, biovar eltor",
    "ischronicdisease": 0,
    "chronicdiseasecode": "",
    "islocked": 0,
    "hos_guid": "",
    "hos_guid_ext": "",
    "is_valid": "Y"
  },
  {
    "code": "A009",
    "name": "Cholera, unspecified",
    "ischronicdisease": 0,
    "chronicdiseasecode": "",
    "islocked": 0,
    "hos_guid": "",
    "hos_guid_ext": "",
    "is_valid": "Y"
  },
  {
    "code": "A01",
    "name": "Typhoid and paratyphoid fevers",
    "ischronicdisease": 0,
    "chronicdiseasecode": "",
    "islocked": 0,
    "hos_guid": "",
    "hos_guid_ext": "",
    "is_valid": null
  },
  {
    "code": "A010",
    "name": "Typhoid fever",
    "ischronicdisease": 0,
    "chronicdiseasecode": "",
    "islocked": 0,
    "hos_guid": "",
    "hos_guid_ext": "",
    "is_valid": "Y"
  },
  {
    "code": "A011",
    "name": "Paratyphoid fever A",
    "ischronicdisease": 0,
    "chronicdiseasecode": "",
    "islocked": 0,
    "hos_guid": "",
    "hos_guid_ext": "",
    "is_valid": "Y"
  },
  {
    "code": "A012",
    "name": "Paratyphoid fever B",
    "ischronicdisease": 0,
    "chronicdiseasecode": "",
    "islocked": 0,
    "hos_guid": "",
    "hos_guid_ext": "",
    "is_valid": "Y"
  }
]
```
