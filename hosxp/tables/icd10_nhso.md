# `icd10_nhso`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(9) | NO | PRI |  |  |  |
| description | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "A000",
    "description": "Cholera due to Vibrio cholerae 01, biovar cholerae",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "code": "A001",
    "description": "Cholera due to Vibrio cholerae 01, biovar eltor",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "code": "A009",
    "description": "Cholera, unspecified",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "code": "A010",
    "description": "Typhoid fever",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "code": "A011",
    "description": "Paratyphoid fever A",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "code": "A012",
    "description": "Paratyphoid fever B",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "code": "A013",
    "description": "Paratyphoid fever C",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "code": "A014",
    "description": "Paratyphoid fever, unspecified",
    "hos_guid": "",
    "hos_guid_ext": ""
  }
]
```
