# `opitemrece_sticker_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| print_count | int(11) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hos_guid": "{00000150-6A36-478A-BF28-AC905B6973C5}",
    "print_count": 4,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{000002F8-FE5D-412A-85D0-1555FF188F06}",
    "print_count": 1,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00001073-2A5E-44BE-BE6E-4020838AB79F}",
    "print_count": 1,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00001C97-FFAE-44BD-8023-0DF4311CAEB3}",
    "print_count": 1,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00002308-0111-44FC-882E-511EF7B6AF09}",
    "print_count": 1,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{0000289F-D41F-4F63-A7CA-DD60513488E6}",
    "print_count": 3,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{000065FE-046D-479A-8E2A-4D7391C007A5}",
    "print_count": 1,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00007DEC-CC00-414D-9500-656C8D48A60F}",
    "print_count": 1,
    "hos_guid_ext": null
  }
]
```
