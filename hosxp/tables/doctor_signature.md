# `doctor_signature`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_code | varchar(20) | NO | PRI |  |  |  |
| signature_jpeg_blob | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | doctor_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "doctor_code": "318",
    "signature_jpeg_blob": "[MASKED_AVATAR]"
  },
  {
    "doctor_code": "187",
    "signature_jpeg_blob": "[MASKED_AVATAR]"
  },
  {
    "doctor_code": "335",
    "signature_jpeg_blob": "[MASKED_AVATAR]"
  },
  {
    "doctor_code": "068",
    "signature_jpeg_blob": "[MASKED_AVATAR]"
  }
]
```
