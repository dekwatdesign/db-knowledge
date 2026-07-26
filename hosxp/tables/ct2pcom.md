# `ct2pcom`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(5) | YES | MUL | NULL |  |  |
| code1 | char(5) | YES |  | NULL |  |  |
| code2 | char(5) | YES |  | NULL |  |  |
| dc | char(4) | YES | MUL | NULL |  |  |
| desc1 | char(26) | YES |  | NULL |  |  |
| desc2 | char(26) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| code | code | no | 1 |
| dc | dc | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "C9596",
    "code1": "3795",
    "code2": "3796",
    "dc": "104x",
    "desc1": "Implt cardiodefib leads",
    "desc2": "Implt cardiodefib genatr",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "C9798",
    "code1": "3797",
    "code2": "3798",
    "dc": "104x",
    "desc1": "Repl cardiodefib leads",
    "desc2": "Repl cardiodefib genratr",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "C4445",
    "code1": "3844",
    "code2": "3845",
    "dc": "108x",
    "desc1": "Resect abdm aorta w repl",
    "desc2": "Resect thorac ves w repl",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "C7080",
    "code1": "3770",
    "code2": "3780",
    "dc": "7x",
    "desc1": "Int insert pacemak lead",
    "desc2": "Int or repl perm pacemkr",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "C7081",
    "code1": "3770",
    "code2": "3781",
    "dc": "7x",
    "desc1": "Int insert pacemak lead",
    "desc2": "Int insert 1-cham, non",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "C7082",
    "code1": "3770",
    "code2": "3782",
    "dc": "7x",
    "desc1": "Int insert pacemak lead",
    "desc2": "Int insert 1-cham, rate",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "C7085",
    "code1": "3770",
    "code2": "3785",
    "dc": "7x",
    "desc1": "Int insert pacemak lead",
    "desc2": "Repl pacem w 1-cham, non",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "C7086",
    "code1": "3770",
    "code2": "3786",
    "dc": "7x",
    "desc1": "Int insert pacemak lead",
    "desc2": "Repl pacem 1-cham, rate",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
