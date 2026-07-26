# `barcode_reader_device`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| barcode_reader_device_id | int(11) | NO | PRI | 0 |  |  |
| barcode_vid | char(4) | YES | UNI | NULL |  |  |
| comment | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_barcode_vid | barcode_vid | yes | 1 |
| PRIMARY | barcode_reader_device_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "barcode_reader_device_id": 1,
    "barcode_vid": "06BC",
    "comment": null
  },
  {
    "barcode_reader_device_id": 2,
    "barcode_vid": "04CA",
    "comment": null
  },
  {
    "barcode_reader_device_id": 3,
    "barcode_vid": "0C2E",
    "comment": null
  },
  {
    "barcode_reader_device_id": 4,
    "barcode_vid": "232B",
    "comment": null
  },
  {
    "barcode_reader_device_id": 5,
    "barcode_vid": "1EAB",
    "comment": null
  },
  {
    "barcode_reader_device_id": 6,
    "barcode_vid": "1A22",
    "comment": null
  }
]
```
