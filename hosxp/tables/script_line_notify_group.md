# `script_line_notify_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| script_group_code | varchar(3) | NO | PRI |  |  |  |
| script_group_name | varchar(100) | YES |  | NULL |  |  |
| token | varchar(200) | YES |  | NULL |  |  |
| image_url | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | script_group_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "script_group_code": "001",
    "script_group_name": "HOSxP_Notify",
    "token": "JthmVQXkqnuu7N98fz3DLhWXAAS0qYOsb85jjIR9TSX",
    "image_url": null
  },
  {
    "script_group_code": "002",
    "script_group_name": "GCC๓_สธ_สจ_รพ.ยป",
    "token": "Un3WqZZ4ut4pv7IXWHLxOwD1pbTNkdv9OBsA5gNmfIV",
    "image_url": null
  },
  {
    "script_group_code": "003",
    "script_group_name": "PCT",
    "token": "pnrGPxplszHIeMBb9ffeMqXOqntpsjlAUsGGX1oyPNT",
    "image_url": null
  }
]
```
