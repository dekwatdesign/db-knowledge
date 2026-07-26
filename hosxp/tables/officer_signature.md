# `officer_signature`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_signature_id | int(11) | NO | PRI | 0 |  |  |
| officer_id | int(11) | YES | UNI | NULL |  |  |
| officer_signature_jpeg_blob | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_id | officer_id | yes | 1 |
| PRIMARY | officer_signature_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "officer_signature_id": 1,
    "officer_id": 3,
    "officer_signature_jpeg_blob": "[MASKED_AVATAR]"
  }
]
```
