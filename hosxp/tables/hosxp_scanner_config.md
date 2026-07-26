# `hosxp_scanner_config`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hosxp_scanner_config_id | int(11) | NO | PRI | 0 |  |  |
| scanner_name | varchar(250) | YES | UNI | NULL |  |  |
| scanner_enabled | char(1) | YES |  | NULL |  |  |
| force_scan_mode | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_scanner_name | scanner_name | yes | 1 |
| PRIMARY | hosxp_scanner_config_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "hosxp_scanner_config_id": 1,
    "scanner_name": "WIA-Brother MFC-T810W",
    "scanner_enabled": null,
    "force_scan_mode": null
  }
]
```
