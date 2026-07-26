# `patch`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| filename | varchar(50) | NO | PRI |  |  |  |
| version | varchar(20) | YES |  | NULL |  |  |
| url | varchar(250) | YES |  | NULL |  |  |
| patch_type | varchar(50) | YES |  | NULL |  |  |
| size | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | filename | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "filename": "HOSMy.exe",
    "version": "3.69.4.15",
    "url": "http://192.168.11.2/HOSMy.exe",
    "patch_type": null,
    "size": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
