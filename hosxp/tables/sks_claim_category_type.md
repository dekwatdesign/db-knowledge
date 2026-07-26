# `sks_claim_category_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_claim_category_type_id | int(11) | NO | PRI | 0 |  |  |
| sks_claim_category_type_name | varchar(150) | YES | UNI | NULL |  |  |
| sks_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sks_claim_category_type_name | sks_claim_category_type_name | yes | 1 |
| PRIMARY | sks_claim_category_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "sks_claim_category_type_id": 1,
    "sks_claim_category_type_name": "OPD ปกติ",
    "sks_code": "OP1",
    "hos_guid": null
  },
  {
    "sks_claim_category_type_id": 2,
    "sks_claim_category_type_name": "OPD อื่นๆ",
    "sks_code": "OP.",
    "hos_guid": null
  },
  {
    "sks_claim_category_type_id": 3,
    "sks_claim_category_type_name": "ไตวายเรื้อรัง",
    "sks_code": "RRT",
    "hos_guid": null
  },
  {
    "sks_claim_category_type_id": 4,
    "sks_claim_category_type_name": "OCPA",
    "sks_code": "P01",
    "hos_guid": null
  },
  {
    "sks_claim_category_type_id": 5,
    "sks_claim_category_type_name": "RDPA",
    "sks_code": "P02",
    "hos_guid": null
  },
  {
    "sks_claim_category_type_id": 6,
    "sks_claim_category_type_name": "DDPA",
    "sks_code": "P03",
    "hos_guid": null
  },
  {
    "sks_claim_category_type_id": 7,
    "sks_claim_category_type_name": "บัญชี.. ต่างๆ",
    "sks_code": "XX.",
    "hos_guid": null
  }
]
```
