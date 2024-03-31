import { Router } from "expo-router/build/types";

export default function dismissAndPush(router: Router, route: string): void {
    if (router.canDismiss()) {
        router.dismissAll();
    }
    setTimeout(() => router.push(route), 0);
}