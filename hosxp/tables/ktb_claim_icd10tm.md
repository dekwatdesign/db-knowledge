# `ktb_claim_icd10tm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ktb_claim_icd10tm_code | varchar(7) | NO | PRI |  |  |  |
| ktb_claim_icd10tm_group_code | varchar(5) | YES |  | NULL |  |  |
| ktb_claim_icd10tm_group_name | varchar(255) | YES |  | NULL |  |  |
| require_tooth | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ktb_claim_icd10tm_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ktb_claim_icd10tm_code": "2330011",
    "ktb_claim_icd10tm_group_code": "D12",
    "ktb_claim_icd10tm_group_name": "ตรวจสุขภาพช่องปาก/วางแผนการรักษา",
    "require_tooth": "N"
  },
  {
    "ktb_claim_icd10tm_code": "2377020",
    "ktb_claim_icd10tm_group_code": "D16",
    "ktb_claim_icd10tm_group_name": "เคลือบ Fluoride",
    "require_tooth": "N"
  },
  {
    "ktb_claim_icd10tm_code": "2377021",
    "ktb_claim_icd10tm_group_code": "D16",
    "ktb_claim_icd10tm_group_name": "เคลือบ Fluoride",
    "require_tooth": "N"
  },
  {
    "ktb_claim_icd10tm_code": "2387020",
    "ktb_claim_icd10tm_group_code": "D16",
    "ktb_claim_icd10tm_group_name": "เคลือบ Fluoride",
    "require_tooth": "N"
  },
  {
    "ktb_claim_icd10tm_code": "2387021",
    "ktb_claim_icd10tm_group_code": "D16",
    "ktb_claim_icd10tm_group_name": "เคลือบ Fluoride",
    "require_tooth": "N"
  },
  {
    "ktb_claim_icd10tm_code": "238703A",
    "ktb_claim_icd10tm_group_code": "D17 ",
    "ktb_claim_icd10tm_group_name": "เคลือบหลุมร่องฟัน",
    "require_tooth": "Y"
  },
  {
    "ktb_claim_icd10tm_code": "238703B",
    "ktb_claim_icd10tm_group_code": "D17 ",
    "ktb_claim_icd10tm_group_name": "เคลือบหลุมร่องฟัน",
    "require_tooth": "Y"
  },
  {
    "ktb_claim_icd10tm_code": "238703C",
    "ktb_claim_icd10tm_group_code": "D17",
    "ktb_claim_icd10tm_group_name": "เคลือบหลุมร่องฟัน",
    "require_tooth": "Y"
  }
]
```
