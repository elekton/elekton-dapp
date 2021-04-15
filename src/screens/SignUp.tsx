import React from "react"
import AuthContext from "../context/AuthContext"
import {
    Theme,
    Container,
    Button,
    TextField,
    createStyles,
    makeStyles,
    useTheme,
    InputAdornment
} from "@material-ui/core"
import useBooleanCondition from "../hooks/useBooleanCondition"
import NotesIcon from "@material-ui/icons/Notes"
import QRCodeViewer from "../components/QRCodeViewer"
import downloadSVG from "../utils/downloadSVG"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingBottom: theme.spacing(8),
            [theme.breakpoints.up("sm")]: {
                justifyContent: "center"
            }
        },
        button: {
            marginTop: theme.spacing(5)
        }
    })
)

export default function SignUp() {
    const classes = useStyles()
    const auth = React.useContext(AuthContext)
    const theme = useTheme()
    const [_QRCodeViewer, toggleQRCodeViewer] = useBooleanCondition()
    const [_name, setName] = React.useState<string>("")
    const [_surname, setSurname] = React.useState<string>("")

    function downloadQRCode() {
        const svg = document.querySelector("#qr-code > svg") as Element

        downloadSVG(svg, {
            fileName: "AccessKey",
            padding: 15,
            backgroundColor: theme.palette.background.paper
        })
    }

    function signUp() {
        toggleQRCodeViewer()
        auth?.signUp(_name + " " + _surname)
    }

    return (
        <Container className={classes.container} maxWidth="sm">
            <TextField
                id="user-name"
                value={_name}
                onChange={(event) => setName(event.target.value)}
                label="Name"
                margin="dense"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <NotesIcon color="action" />
                        </InputAdornment>
                    )
                }}
            />
            <TextField
                id="user-surname"
                value={_surname}
                onChange={(event) => setSurname(event.target.value)}
                label="Surname"
                margin="dense"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <NotesIcon color="action" />
                        </InputAdornment>
                    )
                }}
            />

            <Button className={classes.button} onClick={toggleQRCodeViewer} variant="outlined">
                Create
            </Button>

            <QRCodeViewer
                open={_QRCodeViewer}
                onClose={toggleQRCodeViewer}
                title="Access key"
                message="Download the QR code of your access key and sign up!"
                value={_name + " " + _surname}
            >
                <Button onClick={downloadQRCode}>Download</Button>
                <Button onClick={signUp}>Sign Up</Button>
            </QRCodeViewer>
        </Container>
    )
}
