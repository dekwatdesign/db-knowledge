# `labour_placenta_desc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labour_placenta_desc_id | int(11) | NO | PRI | 0 |  |  |
| labour_placenta_desc_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_labour_placenta_desc_name | labour_placenta_desc_name | yes | 1 |
| PRIMARY | labour_placenta_desc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "labour_placenta_desc_id": 1,
    "labour_placenta_desc_name": "Normal placenta",
    "hos_guid": "{1B274152-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_placenta_desc_id": 2,
    "labour_placenta_desc_name": "Placenta suscenturiata",
    "hos_guid": "{1B27485C-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_placenta_desc_id": 3,
    "labour_placenta_desc_name": "Placenta spurium",
    "hos_guid": "{1B274D69-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_placenta_desc_id": 4,
    "labour_placenta_desc_name": "Calcification",
    "hos_guid": "{1B27521A-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_placenta_desc_id": 5,
    "labour_placenta_desc_name": "Infarction",
    "hos_guid": "{1B2756CB-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_placenta_desc_id": 6,
    "labour_placenta_desc_name": "Retroplacental blood clot",
    "hos_guid": "{1B275B96-E5DA-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
