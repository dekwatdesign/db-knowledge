# `pharm_lab_gene_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tmlt_code | varchar(6) | NO | PRI |  |  |  |
| tmlt_name | varchar(250) | YES |  | NULL |  |  |
| loinc_num | varchar(10) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | tmlt_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "tmlt_code": "380028",
    "tmlt_name": "HLA Ab [+/-] in Serum",
    "loinc_num": "44534-6",
    "active_status": "Y"
  },
  {
    "tmlt_code": "380013",
    "tmlt_name": "HLA Ab [Type] in Serum",
    "loinc_num": "50968-7",
    "active_status": "Y"
  },
  {
    "tmlt_code": "380024",
    "tmlt_name": "HLA Ab panel - Serum",
    "loinc_num": "46993-2",
    "active_status": "Y"
  },
  {
    "tmlt_code": "385104",
    "tmlt_name": "HLA class II Ag [+/-] in Tissue by Immune stain",
    "loinc_num": null,
    "active_status": "Y"
  },
  {
    "tmlt_code": "380014",
    "tmlt_name": "HLA class II DNA high resolution (DRB, DQB) typing - Panel ",
    "loinc_num": null,
    "active_status": "Y"
  },
  {
    "tmlt_code": "380015",
    "tmlt_name": "HLA class II DNA low resolution (DRB, DQB) typing - Panel",
    "loinc_num": null,
    "active_status": "Y"
  },
  {
    "tmlt_code": "380002",
    "tmlt_name": "HLA-A [Type] by High resolution",
    "loinc_num": "57290-9",
    "active_status": "Y"
  },
  {
    "tmlt_code": "380001",
    "tmlt_name": "HLA-A [Type] by Low resolution",
    "loinc_num": "78014-8",
    "active_status": "Y"
  }
]
```
