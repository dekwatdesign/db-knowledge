# `language`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| language_code | char(2) | NO | PRI |  |  |  |
| language_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_language_name | language_name | yes | 1 |
| PRIMARY | language_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "language_code": "EN",
    "language_name": "อังกฤษ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "language_code": "TH",
    "language_name": "ไทย",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
