# `sticker_control`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| header_copy | int(11) | YES |  | NULL |  |  |
| sticker_copy | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| print_mirror | char(1) | YES |  | NULL |  |  |
| print_mirror_lang | char(2) | YES |  | NULL |  |  |
| sticker_print | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "",
    "header_copy": 1,
    "sticker_copy": 1,
    "hos_guid": null,
    "print_mirror": null,
    "print_mirror_lang": null,
    "sticker_print": null
  },
  {
    "vn": "540001023",
    "header_copy": 1,
    "sticker_copy": 1,
    "hos_guid": null,
    "print_mirror": null,
    "print_mirror_lang": null,
    "sticker_print": null
  },
  {
    "vn": "550000663",
    "header_copy": 1,
    "sticker_copy": 1,
    "hos_guid": null,
    "print_mirror": null,
    "print_mirror_lang": null,
    "sticker_print": null
  },
  {
    "vn": "550000668",
    "header_copy": 1,
    "sticker_copy": 1,
    "hos_guid": null,
    "print_mirror": null,
    "print_mirror_lang": null,
    "sticker_print": null
  },
  {
    "vn": "550000671",
    "header_copy": 1,
    "sticker_copy": 1,
    "hos_guid": null,
    "print_mirror": null,
    "print_mirror_lang": null,
    "sticker_print": null
  },
  {
    "vn": "550000680",
    "header_copy": 1,
    "sticker_copy": 1,
    "hos_guid": null,
    "print_mirror": null,
    "print_mirror_lang": null,
    "sticker_print": null
  },
  {
    "vn": "550000700",
    "header_copy": 1,
    "sticker_copy": 1,
    "hos_guid": null,
    "print_mirror": null,
    "print_mirror_lang": null,
    "sticker_print": null
  },
  {
    "vn": "550000702",
    "header_copy": 1,
    "sticker_copy": 1,
    "hos_guid": null,
    "print_mirror": null,
    "print_mirror_lang": null,
    "sticker_print": null
  }
]
```
