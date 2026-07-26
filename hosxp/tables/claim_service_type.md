# `claim_service_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| claim_service_type_code | varchar(5) | NO | PRI |  |  |  |
| claim_service_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_claim_service_type_name | claim_service_type_name | yes | 1 |
| PRIMARY | claim_service_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "claim_service_type_code": "IP",
    "claim_service_type_name": "ปกติ"
  },
  {
    "claim_service_type_code": "HI",
    "claim_service_type_name": "Home Isolation"
  },
  {
    "claim_service_type_code": "CI",
    "claim_service_type_name": "Community Isolation"
  },
  {
    "claim_service_type_code": "ZZ",
    "claim_service_type_name": "ผู้ป่วยโรค Hemophilia"
  },
  {
    "claim_service_type_code": "PF",
    "claim_service_type_name": "ปลูกถ่ายอวัยวะ"
  },
  {
    "claim_service_type_code": "DS",
    "claim_service_type_name": "One Day Surgery"
  }
]
```
